import repositoryBanner from "../repositories/repository.banner.js";

async function Listar() {

    const banners = await repositoryBanner.Listar();

    return banners;
}

export default { Listar };