import { Footer, Header } from "@/src/components/ui";
import { IPublicLayout } from "./PublicLayout.interface";

export const PublicLayout = ({ children }: IPublicLayout) => {
  return (
    <>
      <Header />
      <main className="flex-auto py-36">{children}</main>
      <Footer />
    </>
  );
};
