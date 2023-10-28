import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "pgf1nxbwy3ty",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const projects = response.items.map((i) => {
        const { title, url, image } = i.fields;
        const id = i.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, img };
      });
      setProjects(projects);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
