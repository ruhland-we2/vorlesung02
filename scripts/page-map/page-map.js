const page_map_markup = `
<div id="page-map" class="page">
    <h1>Hello Map</h1>
</div>
`;

function show_page_map(){
    document.body.insertAdjacentHTML("beforeend",page_map_markup);
}