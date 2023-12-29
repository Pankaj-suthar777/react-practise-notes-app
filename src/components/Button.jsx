export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className=" text-whiteshadow-lg text-white rounded-lg ml-5 mt-5 py-2 px-4 bg-sky-500 hover:bg-sky-700"
    >
      {text}
    </button>
  );
}
