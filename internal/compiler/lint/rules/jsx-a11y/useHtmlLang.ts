import {descriptions} from "@internal/diagnostics";
import {JSXElement} from "@internal/ast";
import {createVisitor, signals} from "@internal/compiler";
import {
	getJSXAttribute,
	hasJSXAttribute,
	isEmptyTemplateLiteral,
	isJSXElement,
} from "@internal/js-ast-utils";
import {isJSXDOMElement} from "@internal/js-ast-utils/isJSXDOMElement";

function validLang(node: JSXElement) {
	if (hasJSXAttribute(node, "lang")) {
		const attr = getJSXAttribute(node, "lang");
		if (attr?.value) {
			if (attr.value.type === "JSXExpressionContainer") {
				const expression = attr.value.expression;
				if (expression.type === "JSTemplateLiteral") {
					return !isEmptyTemplateLiteral(expression);
				}
				return (
					expression.type !== "JSNumericLiteral" &&
					expression.type !== "JSBooleanLiteral"
				);
			} else if (attr.value.type === "JSStringLiteral") {
				return true;
			}
			return false;
		}
	}
	return false;
}

export default createVisitor({
	name: "jsx-a11y/useHtmlLang",

	enter(path) {
		const {node} = path;
		if (isJSXDOMElement(node) && isJSXElement(node, "html")) {
			if (!hasJSXAttribute(node, "lang") || !validLang(node)) {
				path.context.addNodeDiagnostic(
					node,
					descriptions.LINT.JSX_A11Y_HTML_USE_LANG,
				);
			}
		}

		return signals.retain;
	},
});
