/// <reference types="node" />

declare module "image-to-ico" {
	const constructor: (filename: string | Buffer | any[],option:{size?: number[],quality?: number,greyscale?: boolean}) => Promise<Buffer>;
	export = constructor;
}
