import Dashboard from "@/components/Dashboard";

export default async function Home() {

  return (<>
    <Dashboard></Dashboard>
    <main className="flex flex-col items-center"> 
        <h1 className="text-4xl">Aplicación con NextJS</h1>
      </main>
    </> 
  );
}
