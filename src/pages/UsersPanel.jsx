import Accordion from "../components/Accordion/Accordion";
import SearchBody from "../components/templates/SearchBox/SearchBody";
import SearchHeader from "../components/templates/SearchBox/SearchHeader";
import "../css/all.css"
function UsersPanel() {
  return (
    <div className="dark:bg-primary-dark min-h-screen text-secondary-dark px-16 py-4" >
     
      <Accordion header={<SearchHeader />}>
        <SearchBody />
      </Accordion>
    </div>
  );
}

export default UsersPanel;
