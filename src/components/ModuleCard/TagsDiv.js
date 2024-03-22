import { S } from "/modules/Delusoire/stdlib/index.js";
const { React } = S;
import { t } from "../../i18n.js";
const knownTags = {
    [t("module.archived")]: "archived"
};
const Tag = (tag)=>/*#__PURE__*/ S.React.createElement("li", {
        className: "bg-[var(--spice-tab-active)] rounded pt-0 pb-1 px-2",
        draggable: false,
        "data-tag": knownTags[tag]
    }, tag);
export default function({ tags, importantTags, showTags }) {
    const baseTags = [
        importantTags,
        showTags && tags
    ].flat();
    return /*#__PURE__*/ S.React.createElement("div", {
        className: "tags-wrapper"
    }, /*#__PURE__*/ S.React.createElement("ul", {
        className: "flex flex-wrap gap-2 text-sm"
    }, baseTags.map(Tag)));
}
