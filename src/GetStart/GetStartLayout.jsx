import Section from "../components/Section.jsx";
import DemoDescrip from "./DemoDescrip.jsx";
import ContactForm from "./RequestDemoFrom.jsx";

function GetStartLayout() {
    return (
        <Section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto] justify-between items-center  gap-x-8 ">
                <DemoDescrip />
                <ContactForm />
        </Section>
    );
}

export default GetStartLayout;