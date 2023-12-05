export default function Button({children, ...props}) {
  return (
    <button {...props} className="flex gap-3 px-4 py-2 rounded-lg text-sm md:text-base bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
      {children}
    </button>
  );
}
