import User from "./User";
import {useRouter} from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <header className="flex justify-between p-5 text-sm text-gray-700 font-semibold ">
      <div className="flex space-x-4 items-center">
        <a className="link" href="https://about.google/">
          About
        </a>
        <a className="link" href="https://store.google.com/">
          Store
        </a>
      </div>
      <div className="flex space-x-4 items-center">
        <a className="link" href="https://mail.google.com">Gmail</a>
        <a onClick={() => router.push(`/search?term=${router.query.term || "google"}&searchType=image`)} className="link">Images</a>
        <User />
      </div>
    </header>
  );
}
