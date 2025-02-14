import { basePage } from "../basePage"

    export class HomePage extends basePage {
        readonly aboutUsButton = this.page.getByRole("link",{
            name: "About Us",
        });
        readonly contactUsButton = this.page.getByRole("link",{
            name: "Contact Us",
        });
        readonly whatWeDoButton = this.page.getByRole("link",{
            name: "What We Do",
        });
        readonly industriesButton = this.page.getByRole("link",{
            name : "Industries",
        });
    }
