/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {AnyTSPrimary, NodeBaseWithComments} from "@internal/ast";
import {createBuilder} from "../../utils";

export interface TSUnionTypeAnnotation extends NodeBaseWithComments {
	readonly type: "TSUnionTypeAnnotation";
	readonly types: Array<AnyTSPrimary>;
}

export const tsUnionTypeAnnotation = createBuilder<TSUnionTypeAnnotation>(
	"TSUnionTypeAnnotation",
	{
		bindingKeys: {},
		visitorKeys: {
			types: true,
		},
	},
);
