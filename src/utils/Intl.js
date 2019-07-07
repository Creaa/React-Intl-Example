import {
	intlShape
} from "react-intl";

var intl;

export const IntlCapture = (props, context) => {
	intl = context.intl;
	return props.children;
};

IntlCapture.contextTypes = {
	intl: intlShape.isRequired
};


class _Intl {
	t(message, values) {
		return intl.formatMessage(message, values);
	}
	locale = "pl";
	messages = {};
	async load(locale) {
		this.messages = await import(`../translations/${locale}.json`);
	}
}
const Intl = new _Intl();
export default Intl;