declare module "*.m.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.m.less" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
