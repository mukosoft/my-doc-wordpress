/**
 * Render the office name
 *
 * @author Dominique Börner (dominiqueboerner@outlook.de)
 */
//<!--
jQuery(document).ready(function( $ )
{
    $.getJSON("https://my-doc.net/?module=mydoc&sektion=show_doctor&uuid=" + my_doc_config.api_key + "&return=json", function($data)
    {
        if($data["success"])
        {
            var $name = $data["data"]["company"];
            $(".mydoc-doctor-office-name").text($name);
        }
    });
});
