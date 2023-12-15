import wikitextparser as wtp

#open text file in read mode
text_file = open("cl_panorama_script_help_2.txt", "r")
 
#read whole file to a string
data = text_file.read()
parsed = wtp.parse(data)

print(f"Total sections: {parsed.sections.__len__()}")
count = 1
result_list = []
for section in parsed.sections:
    if section.title is None or section.tables.__len__ == 0:
        continue
    title = section.title
    table = section.tables[0]
    data = table.data()

    if data is None or data.__len__() == 0:
        continue

    header = data[0]
    count += 1
    api_type = header[0].strip()

    func_def_list = []
    for each_row in data[1:]:
        signature = each_row[0]
        if api_type == "Function":
            func_comment = each_row[2]
            func_marker = "@function"
            comment_block = f"""
/**
{func_comment}
{func_marker}
 */
"""
            content = comment_block + f"{signature}: function() {{}}"
            func_def_list.append(content)
        else:
            enum_val = each_row[1]
            signature = signature.split(".")[1]
            func_def_list.append(f"{signature}: {enum_val}")
    
    section_result = ',\n'.join(func_def_list)

    group_var = ""
    if "CPanoramaScript_" in title:
        group_var = title.split("CPanoramaScript_")[1]
    elif "CScriptBindingPR_" in title:
        group_var = title.split("CScriptBindingPR_")[1]
    elif "CDOTA_PanoramaScript_" in title:
        group_var = title.split("CDOTA_PanoramaScript_")[1]
    else:
        group_var = title
    var_func = f"var {group_var} = {{{section_result}}}"
    
    if api_type == "Enumerator":
        enum_comment = f"""
/**
 @enum {{number}}
 */
"""
        var_func = enum_comment + var_func
    result_list.append(var_func)

final_result = '\n\n'.join(result_list)
out_file = open("sample.js", "w")
out_file.write(final_result)
out_file.close()
#close file
text_file.close()