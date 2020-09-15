/**
 * Render the team
 *
 * @author Dominique Börner (dominiqueboerner@outlook.de)
 */

const teamStyles = {
    cardStyle:
        "display: flex; flex-direction: row; flex: 1; " +
        "width: 30%; " +
        "margin: 10px; padding: 10px; " +
        "border-radius: 4px; " +
        "background: #eee; " +
        "box-shadow: 5px 5px 10px #ccc",
    imgContainerStyle: "padding: 10px;",
    imgStyle: "max-width: 200px; max-height: 200px;",
    textContainerStyle: "padding: 10px;"
};

jQuery(document).ready(function( $ )
{
    $.getJSON("https://my-doc.net/?module=mydoc&sektion=show_doctor&uuid=" + my_doc_config.api_key + "&return=json", function($data)
    {
        if($data["success"])
        {
            var $employees = $data["data"]["Employees"];
            $.each( $employees, function ($key, $val) {
                if ($val.additional_fields.Funktion) {
                    var card = `<div style="${teamStyles.cardStyle}">
                    <div style="${teamStyles.imgContainerStyle}">
                        <img src="${$val._image}" style="${teamStyles.imgContainerStyle}" alt="${$val.full_name}" />
                    </div>
                    <div style="${teamStyles.textContainerStyle}">
                        <h1>${$val.full_name}</h1>
                        <article>${$val.additional_fields.Funktion}</article>
                    </div>
                    </div>`;
                    $('.mydoc-team').append(card);
                }
            })
        }
    });
});
