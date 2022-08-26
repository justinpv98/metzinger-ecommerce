import { useLayoutEffect } from "react";

export default function useDocumentTitle(title) {
  // Changes document title and scrolls to top before painting DOM

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.title = title
      ? `METZINGER | ${title}`
      : `METZINGER | Luxury Fashion for Men and Women`;
  }, [title]);
}