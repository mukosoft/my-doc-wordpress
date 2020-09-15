/**
 * Counts the amount of team members
 *
 * @author Dominique Börner (dominiqueboerner@outlook.de)
 */
jQuery(document).ready(function( $ )
{
    $.getJSON("https://my-doc.net/?module=mydoc&sektion=show_doctor&uuid=" + my_doc_config.api_key + "&return=json", function($data)
    {
        if($data["success"])
        {
            $('.mydoc-team-count').text($data["data"]["Employees"].length - 1);
        }
    });
});
