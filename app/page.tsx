export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <div className="text-center px-6">
        <p className="text-sm font-semibold tracking-[0.3em] text-indigo-300 uppercase mb-6">
          Welcome
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
          비개발자 분들을 위한 세미나에
          <br />
          <span className="text-indigo-300">오셔서 감사합니다</span>
        </h1>
        <div className="mt-8 w-16 h-1 bg-indigo-400 rounded-full mx-auto opacity-60" />
      </div>
    </main>
  );
}
