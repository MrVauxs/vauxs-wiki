import GLightbox from "glightbox";

type Lightbox = ReturnType<typeof GLightbox>;

const imageSelector =
	".sl-markdown-content img[data-image-component='true']:not([data-no-lightbox])";

declare global {
	interface Window {
		__starlightLightbox?: Lightbox;
	}
}

const unwrapExistingLightboxLinks = () => {
	const links = document.querySelectorAll<HTMLAnchorElement>(
		"a.starlight-lightbox[data-generated-lightbox='true']",
	);

	for (const link of links) {
		const image = link.querySelector("img");

		if (!image || !link.parentNode) continue;

		link.parentNode.insertBefore(image, link);
		link.remove();
	}
};

const wrapImages = () => {
	const images = document.querySelectorAll<HTMLImageElement>(imageSelector);

	for (const image of images) {
		if (image.closest("a.starlight-lightbox")) continue;
		if (image.closest("a")) continue;

		const link = document.createElement("a");

		link.href = image.currentSrc || image.src;
		link.className = "starlight-lightbox";
		link.dataset.generatedLightbox = "true";

		const alt = image.getAttribute("alt");

		if (alt) {
			link.dataset.title = alt;
		}

		image.parentNode?.insertBefore(link, image);
		link.appendChild(image);
	}
};

const initLightbox = () => {
	window.__starlightLightbox?.destroy();

	unwrapExistingLightboxLinks();
	wrapImages();

	window.__starlightLightbox = GLightbox({
		selector: ".starlight-lightbox",
		touchNavigation: true,
		loop: false,
		closeOnOutsideClick: true,
	});
};

initLightbox();

document.addEventListener("astro:page-load", initLightbox);