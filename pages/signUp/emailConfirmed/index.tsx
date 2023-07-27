import {NextPageWithLayout} from "pages/_app";
import {getLayout} from "components/Layout/BaseLayout/BaseLayout";
import Link from "next/link";


const EmailConfirmed = () => (
    <div>
        <h2>Congratulations</h2>
        <div> Your email has been confirmed</div>
        <Link href={'/signIn'}>
            <button> Sign In</button>
        </Link>
    </div>
)

EmailConfirmed.getLayout = getLayout
export default EmailConfirmed;
