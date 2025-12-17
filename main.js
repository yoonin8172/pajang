import { renderPlaylist } from "./playlist.js";
import { renderWorks } from "./works.js";
import { renderArchive } from "./archive.js";

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        const page = item.dataset.page;

        if (page === "playlist") renderPlaylist();
        if (page === "works") renderWorks();
        if (page === "archive") renderArchive();
    });
});
