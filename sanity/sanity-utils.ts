import { createClient, groq } from "next-sanity";


export async function getProjects(){
 const client = createClient(
    {
        projectId: '8byaucze',
        dataset: 'production',
        apiVersion: "2023-03-12",
    }
 );
 //here we are going to use groq query language 
 return client.fetch(
    //This is a groq function 
    //It will take a groq project
    groq`*[_type = "project" ]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image":image.asset => url,
        url,
        content

    }`

 )
}