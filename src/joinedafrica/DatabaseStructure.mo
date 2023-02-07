import Cat "types";
module {
    type Database = Cat.Database;

    public let Database : [Database] = [
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

                "accessories-for-mobile-phones-&-tablets",
            ];
        },
        {
            name = "property";
            subcategory = [
                "houses-&-apartments-for-rent",

                "houses-&-apartments-for-sale",

                "land-&-plots-for-sale",
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
