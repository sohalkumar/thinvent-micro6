import os
import json

def list_files_as_array(directory_path, output_json_file):
    # List to store file information as dictionaries
    files_list = []
    
    # Walk through the directory
    for root, dirs, files in os.walk(directory_path):
        for file in files:
            # Get the file name without extension
            file_name = os.path.splitext(file)[0]
            # Get the full file path
            full_path = os.path.join(root, file).replace("public/", "")
            # Append a dictionary with file info to the list
            files_list.append({
                "name": file_name,
                "src": full_path,
                "alt": f"{file_name} logo"
            })
    
    # Write the list to a JSON file
    with open(output_json_file, 'w') as json_file:
        json.dump(files_list, json_file, indent=4)
    
    print(f"File list saved to {output_json_file}")


list_files_as_array('public/images/institutes/micro5/', 'components/Devices/ThinClient/institute_logos.json')
