const page_map_markup = `
<div id="page-map" class="page">
    <div id="page-map-header">
        <div class="title">Vorlesung02 Map</div>
    </div>
    <div id="page-map-area">
    </div>
</div>
`;

function show_page_map(){
    document.body.insertAdjacentHTML("beforeend",page_map_markup);
}