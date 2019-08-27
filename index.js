const load = async () => {
  const assets = await import("./assets/*.(json)");
  console.log(assets);
};
load();
