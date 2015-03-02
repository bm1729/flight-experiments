define(['flight/lib/component'], function(defineComponent) {
    
    'use strict';
    
    var data = [{id: 1, name: "Fred", details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce augue \
    felis, laoreet vitae quam a, ullamcorper fringilla arcu. Fusce auctor accumsan sapien vestibulum suscipit. Fusce\
    semper lobortis interdum. Nulla ut convallis dui, sed interdum odio. Donec urna felis, feugiat ut tincidunt vel,\
    tincidunt nec magna. Nunc dignissim arcu nisl, convallis dignissim mi sagittis id. Class aptent taciti sociosqu \
    ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque pulvinar pellentesque est. Sed rutrum \
    molestie quam. Sed quis metus purus. Quisque placerat sapien ac dolor cursus, et dapibus ligula posuere. In \
    rhoncus, libero a blandit volutpat, neque ex mollis lorem, vitae ultricies turpis elit in turpis. Duis lacinia \
    sem eget erat luctus, et feugiat ex tincidunt. Vivamus ultricies ac purus vel sagittis. Donec tincidunt \
    ullamcorper pharetra."}, 
    {id: 2, name: "George", details:"Donec vitae tempor justo. Aenean ultricies dolor id tellus varius, id mollis ex\
    lacinia. Cras porta tempus tellus vel porta. Etiam malesuada suscipit arcu, vel ornare magna imperdiet non. Sed \
    et nisl sem. Sed auctor iaculis pellentesque. Morbi semper eros a erat venenatis mollis. Quisque imperdiet in \
    neque vel efficitur. Integer sit amet justo id libero ullamcorper posuere vitae vitae felis."}, 
    {id: 3, name: "Tom", details:"Maecenas ut feugiat magna. Duis ut leo massa. Ut volutpat orci sit amet arcu porta\
    mollis. Cras rutrum ex et nibh sollicitudin, in laoreet mi posuere. Vivamus vel viverra enim. In hac habitasse \
    platea dictumst. Donec sit amet velit dolor. Nam metus metus, lacinia ac rutrum at, lacinia ut dui."}, 
    {id: 4, name: "Cedric", details:"Ut tincidunt vehicula ligula, sed venenatis arcu aliquet at. Aenean a mi nibh.\
    Donec ut mi ut diam mattis tempus. Vestibulum rutrum magna id pharetra blandit. Quisque blandit id lacus eget \
    pellentesque. Pellentesque condimentum et libero ac euismod. Pellentesque vitae tellus et quam molestie \
    placerat. Ut sagittis elit arcu, id cursus sem euismod eu. Cum sociis natoque penatibus et magnis dis parturient\
    montes, nascetur ridiculus mus. Donec pellentesque nulla id risus egestas, non interdum augue vehicula. In \
    aliquam rhoncus lacus in pretium. Nullam massa ligula, pharetra nec pretium id, malesuada sit amet magna."}, 
    {id:5, name: "Harry", details:"Fusce mi odio, dignissim sed mattis tincidunt, sodales et ipsum. In lacus arcu, \
    dignissim nec rhoncus quis, porttitor sed dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. \
    Suspendisse ultrices consequat condimentum. Praesent enim tortor, eleifend sit amet erat ac, pretium consequat \
    sem. Sed eget tincidunt turpis. Fusce dictum auctor justo ut laoreet. Curabitur quis suscipit magna. Morbi \
    consectetur aliquam dapibus. Mauris maximus scelerisque turpis. Vivamus rutrum odio eget ornare convallis. \
    Curabitur sed libero eu ligula tempor sodales. Curabitur dignissim malesuada lorem, iaculis aliquet diam \
    ultrices nec."}];
    
    function dataComponent() {
        
        this.uiItemsRequested = function() {
            this.trigger('dataItemsServed', {data: data});
        };
        
        this.uiItemRequested = function(event, request) {
            var selectedDatum = $.grep(data, function(datum, index) {
                return +request.id === datum.id;
            })[0];
            this.trigger('dataItemServed', selectedDatum);
        };
        
        this.after('initialize', function() {
            this.on('uiItemRequested', this.uiItemRequested);
            this.on('uiItemsRequested', this.uiItemsRequested);
        });
    }
    
    return defineComponent(dataComponent);
});