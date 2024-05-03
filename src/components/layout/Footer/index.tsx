import { MARGIN } from "../../../constants/layout";

const Footer = () => {
    return (
        <div className={`${MARGIN} py-5 border-t border-regent-gray-200 flex`}>
            <p className="m-auto text-sm text-regent-gray-600">
                © 2024. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;
