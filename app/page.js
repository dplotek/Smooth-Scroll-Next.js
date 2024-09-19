import ImageList from '../components/ImageList';

export default function Home() {
  return (
    <main className="p-16 xl:p-32 flex flex-col w-full items-center justify-center">
      <h1 className="font-medium text-4xl border border-solid border-white p-4">
        Smooth Scolling Using Lenis
      </h1>
      {/* <ImageList /> */}
      <div className='min-h-screen bg-slate-800 w-full'>a</div>
      <div className='min-h-screen bg-slate-900 w-full'>b</div>
      <div className='min-h-screen bg-slate-950 w-full'>c</div>
    </main>
  );
}
