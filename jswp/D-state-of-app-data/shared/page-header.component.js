import { div, h1 } from "../common/dom-elements.js";

export function PageHeader({ title = 'Sample title' }) {
    return div([
        h1(title),
    ], 'p-5 mb-4 bg-light rounded-3')
}