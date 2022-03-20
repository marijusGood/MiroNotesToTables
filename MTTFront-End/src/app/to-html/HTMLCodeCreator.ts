import { RowData, TableOfRows } from "../rowDataInterface";

export class HTMLCodeCreator {
    generateHTMLCode(tableData: TableOfRows) {
        let HTMLCode = `<h2 class="auto-cursor-target">Feedback for: ` + tableData.TableName + `</h2>\n`;
        HTMLCode += `<table class="relative-table wrapped" style="width: 95.1087%;">
<colgroup>
    <col style="width: 8.80503%;" />
    <col style="width: 18.0675%;" />
    <col style="width: 24.5283%;" />
    <col style="width: 18.8679%;" />
    <col style="width: 18.1246%;" />
</colgroup>
<tbody>
    <tr>
        <th>
            <p>Priority</p>
            <p>
                <em>(number of upvotes)</em>
            </p>
        </th>
        <th>Summary</th>
        <th>Desired State (at end of 2022)</th>
        <th colspan="1">Actions for EngX</th>
        <th colspan="1">Actions for Engineers</th>
    </tr>\n`;
        
        for (let i = 0; i < tableData.Rows.length; i++) {
            let listOfLines = tableData.Rows[i].Summary.split(/\r?\n/);
            console.log(listOfLines);
            HTMLCode += `<tr>\n`;
            HTMLCode += `<td colspan="1">` + tableData.Rows[i].Priority + `</td>\n`;
            HTMLCode += `<td colspan="1">\n`;
            for (let k = 0; k < listOfLines.length; k++) {
                HTMLCode += `<p>` + listOfLines[k] + `</p>\n`;
            }
            HTMLCode += `</td>
    <td colspan="1">
        <ul>
            <li>Desired State line</li>
        </ul>
    </td>
    <td colspan="1">
        <ac:task-list>
            <ac:task>
                <ac:task-id>18</ac:task-id>
                <ac:task-status>incomplete</ac:task-status>
                <ac:task-body>
                    <span class="placeholder-inline-tasks">task</span>
                </ac:task-body>
            </ac:task>
        </ac:task-list>
    </td>
    <td colspan="1">
        <p>Add your name here if you are willing to tell us more about your work from home set up troubles:</p>
        <ul>
            <li>@&lt;your name&gt;</li>
        </ul>
    </td>
</tr>\n`
        }

        
        HTMLCode += `</tbody>
</table>
<p class="auto-cursor-target">
<br />
</p>`
        return HTMLCode;
    }
}