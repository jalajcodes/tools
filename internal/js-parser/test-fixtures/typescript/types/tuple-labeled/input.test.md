# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > types > tuple-labeled`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "typescript/types/tuple-labeled/input.ts"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array ["ts"]
	loc: Object {
		filename: "typescript/types/tuple-labeled/input.ts"
		end: Object {
			column: 0
			line: 2
		}
		start: Object {
			column: 0
			line: 1
		}
	}
	body: Array [
		TSTypeAlias {
			id: JSBindingIdentifier {
				name: "StrStrNumNumBool"
				loc: Object {
					filename: "typescript/types/tuple-labeled/input.ts"
					identifierName: "StrStrNumNumBool"
					end: Object {
						column: 21
						line: 1
					}
					start: Object {
						column: 5
						line: 1
					}
				}
			}
			typeParameters: undefined
			loc: Object {
				filename: "typescript/types/tuple-labeled/input.ts"
				end: Object {
					column: 46
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			right: TSTupleType {
				loc: Object {
					filename: "typescript/types/tuple-labeled/input.ts"
					end: Object {
						column: 45
						line: 1
					}
					start: Object {
						column: 24
						line: 1
					}
				}
				elementTypes: Array [
					TSTupleElement {
						name: undefined
						optional: false
						loc: Object {
							filename: "typescript/types/tuple-labeled/input.ts"
							end: Object {
								column: 32
								line: 1
							}
							start: Object {
								column: 25
								line: 1
							}
						}
						typeAnnotation: TSBooleanKeywordTypeAnnotation {
							loc: Object {
								filename: "typescript/types/tuple-labeled/input.ts"
								end: Object {
									column: 32
									line: 1
								}
								start: Object {
									column: 25
									line: 1
								}
							}
						}
					}
					TSTupleElement {
						name: undefined
						optional: false
						loc: Object {
							filename: "typescript/types/tuple-labeled/input.ts"
							end: Object {
								column: 44
								line: 1
							}
							start: Object {
								column: 34
								line: 1
							}
						}
						typeAnnotation: TSRestType {
							loc: Object {
								filename: "typescript/types/tuple-labeled/input.ts"
								end: Object {
									column: 44
									line: 1
								}
								start: Object {
									column: 34
									line: 1
								}
							}
							argument: TSTypeReference {
								typeParameters: undefined
								loc: Object {
									filename: "typescript/types/tuple-labeled/input.ts"
									end: Object {
										column: 44
										line: 1
									}
									start: Object {
										column: 37
										line: 1
									}
								}
								typeName: JSReferenceIdentifier {
									name: "Strings"
									loc: Object {
										filename: "typescript/types/tuple-labeled/input.ts"
										identifierName: "Strings"
										end: Object {
											column: 44
											line: 1
										}
										start: Object {
											column: 37
											line: 1
										}
									}
								}
							}
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
