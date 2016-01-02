import {ProseMirror} from "prosemirror/dist/edit/main"

import {Pos, Node} from "prosemirror/dist/model"

import {fromDOM, fromHTML} from "prosemirror/dist/parse/dom"

import {MenuBar} from "prosemirror/dist/menu/menubar"

import {SchemaSpec, Schema, defaultSchema, Block, Textblock, Inline, Text,
        Attribute, StyleType} from "prosemirror/dist/model"

import {elt} from "prosemirror/dist/dom"

import {wrap} from "prosemirror/dist/serialize/dom"

import {serializeTo} from "prosemirror/dist/serialize"

import {Step} from "prosemirror/dist/transform"

import {defineCommand} from "prosemirror/dist/edit"
import {eventMixin} from "prosemirror/dist/util/event"
import {MenuUpdate} from "prosemirror/dist/menu/update"

import {Tooltip} from "prosemirror/dist/menu/tooltip"

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
    Step: Step,
    serializeTo: serializeTo,
    defineCommand: defineCommand,
    eventMixin: eventMixin,
    MenuUpdate: MenuUpdate,
    Tooltip: Tooltip
};
