import AccountantsListing from "../../features/accountants/components/accountants-listing";
import Navbar from "../../features/ui/components/navbar";
import SiteWrapper from "../../features/ui/components/site-wrapper";

export default function Accountants() {
  return (
    <SiteWrapper>
      <Navbar />
      <main>
        <AccountantsListing />
      </main>
    </SiteWrapper>
  );
}
