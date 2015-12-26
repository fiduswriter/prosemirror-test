import {ProseMirror} from "prosemirror/dist/edit/main"

import {Pos, Node} from "prosemirror/dist/model"

import {fromDOM, fromHTML} from "prosemirror/dist/parse/dom"

import {MenuBar} from "prosemirror/dist/menu/menubar"

import {SchemaSpec, Schema, defaultSchema, Block, TextBlock, Inline, Text,
        Attribute, StyleType} from "prosemirror/dist/model"

import {elt} from "prosemirror/dist/dom"

import {wrap} from "prosemirror/dist/serialize/dom"

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
    TextBlock: TextBlock,
    Inline: Inline,
    Text: Text,
    Attribute: Attribute,
    StyleType: StyleType,
    elt: elt,
    wrap: wrap
};
