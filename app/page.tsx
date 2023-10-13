import Dashboard from "@/components/Dashboard";

export default async function Home() {

  return (<>
    <Dashboard></Dashboard>
    <main className="mt-5 flex flex-col items-center"> 
        <h1 className="text-4xl font-bold">Aplicación con NextJS</h1>
      </main>
    </> 
  );
}
