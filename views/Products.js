MyApp.products = function (params) {
    var viewModel = {
        searchString: ko.observable(''),
        find: function () {
            viewModel.showSearch(!viewModel.showSearch());
            alert('searching');
        },
        showSearch: ko.observable(false),
        categoryId: params.id,
        dataSource: [
            { id: 1, name: "Wiskey", category_id: 1 },
            { id: 2, name: "Cognac", category_id: 1 },
            { id: 3, name: "Banana", category_id: 2 },
            { id: 4, name: "Pineapple", category_id: 2 }
        ]
    };
    return viewModel;
};