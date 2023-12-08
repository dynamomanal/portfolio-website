import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from "./sanity/schemas/project-schema";

const config = defineConfig(
    {
  title: 'My Sanity Project',
//The project id refers to the project we ahve top look at
//and dataset refers to which server to push at
  projectId: '8byaucze',
  dataset: 'production',
  apiVersion: "2023-03-12",
  basePath: "/admin",
  //DeskTool is the plugin through which we view our project
  plugins: [deskTool()],
  schema:{ types:[project] }
    }
)
export default config;