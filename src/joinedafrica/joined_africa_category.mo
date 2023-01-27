import Cat "types";
module {
    type Category = Cat.Category;

    public let joined_africa_category : [Category] = [
        {
            name = "vehicles";
            subcategory = ["cars", "boats", "trucks", "trailers", "motocycles"];
        },
        {
            name = "electronics";
            subcategory = [
                "computer-&-laptops",

                "video-games",

                "camera",

                "radio-&-home-audio",

                "other-electronic-gadgets",
            ];
        },
        {
            name = "health-&-beauty";
            subcategory = [
                "skin-care",

                "hair-products",

                "bath-&-body",

                "fragrance",

                "vitamins-&-supplements",
            ];
        },
        {
            name = "mobile-phones-&-tablets";
            subcategory = [
                "phones",

                "tablets",

                "wrist-watches",

                "accessories-for-mobile-phones-&-tablets",
            ];
        },
        {
            name = "property";
            subcategory = [
                "houses-&-apartments-for-rent",

                "houses-&-apartments-for-sale",

                "land-&-plots-for-rent",

                "commercial-property-for-sale",

                "short-let-property",
            ];
        },
        {
            name = "fashion";
            subcategory = [
                "bags",

                "clothing-&-clothing-accessories",

                "jewelry",

                "shoes",
            ];
        },
    ];
};
