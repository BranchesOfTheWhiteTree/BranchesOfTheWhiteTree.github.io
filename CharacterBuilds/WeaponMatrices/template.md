# Calculations Page - For Kaedehara Kazuha

<div class="row">
<div class="col-4 col-12-medium">
<h3>Pick a Weapon</h3>
<select name="weapons" id="weapons">
</select>
</div>
</div>

</form>

<script type="text/javascript" language="javascript">

    let WeaponSetName = "./../SupportFiles/weapon-list.json";
    let WeaponSetIndex = 1;
    let WeaponList = {};

    window.onload = (event) =>
    {
        SetupPage()
    };

    async function SetupPage()
    {
        await FetchWeapons(WeaponSetName, WeaponSetIndex);
        InitializeWeaponList();

        console.log("Load Button Ready!");
        // InitializeForms();
    }

    async function FetchWeapons(fname, index)
    {
        let MatrixInitializer = {
            method:'GET',
            headers: {
                'Accept': 'application/json',
            },
        }
        await fetch(fname, MatrixInitializer)
        .then(response => response.json())
        .then(response => TransferWeapons(response, index))
        .catch(error => console.error("Something went wrong in fetching " + fname + " " + error));
    }

    function TransferWeapons(WeaponJSON, index)
    {
        WeaponList = JSON.parse(JSON.stringify(WeaponJSON))[index];
        console.log("Got the Weapons!")
        // console.log(WeaponList)
    }

    function InitializeWeaponList()
    {
        let tempWeaponList = JSON.parse(JSON.stringify(WeaponList));
        delete tempWeaponList["000"];

        let htmlTags = "";

        for(weaponID in tempWeaponList)
        {
            htmlTags += `<option value=${weaponID} id="weapon-${weaponID}">`
            htmlTags += tempWeaponList[weaponID];
            htmlTags += '</option>'
        }
        
        document.getElementById('weapons').innerHTML = htmlTags;
    }
</script>