/**
 * Render the pinnwand
 *
 * @author Dominique Börner (dominiqueboerner@outlook.de)
 */

// const styles = {
//     cardStyle:
//         "display: flex; flex-direction: row; " +
//         "width: 100%; " +
//         "margin: 10px; padding: 10px; " +
//         "border-radius: 4px; " +
//         "background: #eee; " +
//         "box-shadow: 5px 5px 10px #ccc",
//     imgContainerStyle: "padding: 10px;",
//     imgStyle: "max-width: 200px; max-height: 200px;",
//     textContainerStyle: "padding: 10px;"
// };

//<!--
jQuery(document).ready(function( $ )
{
    $.getJSON("https://my-doc.net/?module=mydoc&sektion=show_doctor&uuid=" + my_doc_config.api_key + "&return=json", function($data)
    {
        if($data["success"])
        {
            var $pinnwand = $data["data"]["werbung_1"];
            $('.mydoc-pinnwand').append($pinnwand);

        }
    });
});
