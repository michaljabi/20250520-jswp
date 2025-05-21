import { guestList } from "./guest-list.js";
import { div, h1, h2, ul, li } from './dom-creators.js'


export const mainDiv = div([
    div([
        h1('A Little Party Never Killed Nobody'),
    ], 'p-5 mb-4 bg-light rounded-3'),
    div([
        h2('Lista gości'),
        ul(guestList.map(name => li(name, 'list - group - item')), 'list - group')
    ], 'container')
]);