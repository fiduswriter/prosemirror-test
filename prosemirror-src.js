import {ProseMirror} from "prosemirror/dist/edit/main"

import {Pos, Node} from "prosemirror/dist/model"

import {fromDOM, fromHTML} from "prosemirror/dist/parse/dom"

import {MenuBar} from "prosemirror/dist/menu/menubar"

import {SchemaSpec, Schema, defaultSchema, Block, Textblock, Inline, Text,
        Attribute, StyleType} from "prosemirror/dist/model"

import {elt} from "prosemirror/dist/dom"

import {wrap} from "prosemirror/dist/serialize/dom"

import {Step} from "prosemirror/dist/transform"

import "prosemirror/dist/collab"

window.pm = {
    ProseMirror: ProseMirror,
    Pos: Pos,
    Node: Node,
    fromDOM: fromDOM,
    fromHTML: fromHTML,
    MenuBar: MenuBar,
    SchemaSpec: SchemaSpec,
    Schema: Schema,
    defaultSchema: defaultSchema,
    Block: Block,
    Textblock: Textblock,
    Inline: Inline,
    Text: Text,
    Attribute: Attribute,
    StyleType: StyleType,
    elt: elt,
    wrap: wrap,
    Step: Step
};
