import { MdDelete } from "react-icons/md";

export default function Note({ color, note, dNote }) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="flex w-[300px] px-2 m-6 rounded-md py-2 flex-col bg-slate-500"
    >
      <div className="flex justify-center align-middle h-6 text-white">
        <MdDelete onClick={() => dNote(note.id)} />
      </div>

      <textarea className="rounded-md h-[100px] outline-none px-2  "></textarea>
    </div>
  );
}
