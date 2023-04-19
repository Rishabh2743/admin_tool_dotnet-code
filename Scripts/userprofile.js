function Getresultdashboard() {
   
            dataSource = new kendo.data.DataSource({
                type: "aspnetmvc-ajax",
                pageSize: 20,
                serverPaging: true,
                serverSorting: true,
                schema: {
                    data: "Data",
                    total: "Total",
                },
                transport: {
                    read: {
                        url:  "/userprofile/resultdashboard/",
                        data: function () {
                            var Email = $('#Email').val();
                            return { "Email": Email };
                        },
                        dataType: "json",
                        type: "POST"
                    }
                }
            });
            $("#Resultdashboard").kendoGrid({
                dataSource: dataSource,
                columns: [
                    { field: "Subject", title: "Account ID" },
                    { field: "marks", title: "Account Name" },
                    { field: "Total", title: "Account Type" },
                    { field: "Percentage", title: "User ID" },
                   
                ],
                scrollable: false,
                editable: false,
                sortable: true,
                pageable: {
                    pageSizes: [10, 20, 50]
                }
            });
        
       
}