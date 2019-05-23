//getting username
 var username=prompt("Enter your name :");
 $('.username').text(username);
//Store notes
var defaultNote="Welcome to Note Now! An open source web platform to store notes and keep credential things protected . Simply add your notes using given functionalities! ";
var showNote="";
var password="";
var notes = [];
var numberOfMemo=0;
var currentMemo=0;
notes.push(defaultNote);
//Activation of opening defualt note button
$('.default').on('click',function(){
    $('.inputMemo').val(defaultNote);
})
//Activation of delete note button for default memo
$('.deleteMemo').on('click',function( event ){
    $(this).parent().remove();
    ($('.inputMemo').val(""));
})
//Activation of set new password button
$('.password').on('click',function(){
    password=prompt("Enter new password");
    this.remove();
})
//Activation of add new note button
$('.addNote').on('click',function(){
    numberOfMemo++;
    if($('.memoTitle').val())
    {
        $('ul').append('<li><button class="btn btn-danger deleteMemo"><i class="fas fa-trash-alt"></i></button> &nbsp;<button class="btn btn-warning btn-sm newMemo" name="'+numberOfMemo+'">' +$('.memoTitle').val() + '</button></li>');
        $('.memoTitle').val("");
        //Activation of delete note button
        $('.deleteMemo').on('click',function( event ){
            $(this).parent().remove();
            ($('.inputMemo').val(""));
        })
        //Activation of opening memo buttons
        $($('.newMemo')[numberOfMemo-1]).on('click',function(event){
            var sib=$(this).siblings();
            console.log("hello",sib);
            if($(this).siblings().attr('name')){
                console.log($(this).attr('name'));
                var enterPassword=prompt("Enter your password to view this note :");
                if(enterPassword==password)
                {
                    currentMemo=$(this).attr('name');
                    console.log(numberOfMemo-1);
                    showNote=notes[currentMemo];
                    $('.inputMemo').val(showNote);
                }
                else
                    alert("Access denied");
            }
            else{
            currentMemo=$(this).attr('name');
            console.log(currentMemo);
            showNote=notes[currentMemo];
            $('.inputMemo').val(showNote);
            }
        })
        //Activation of save button
        $('.saveMemo').on('click',function(){
            if($('.inputMemo').val())
                notes[currentMemo]=($('.inputMemo').val());
            else
                alert("Cannot Save Empty Note");
        })
        //Activation of lock button
        $('.lock').on('click',function(){
            if(password)
            {
                if(!$($('.newMemo')[currentMemo-1]).siblings().attr('name')){
                $($('.newMemo')[currentMemo-1]).addClass("locked")
                $($('.newMemo')[currentMemo-1]).append(' &nbsp;<i class="fas fa-lock"></i><div class="lockTrue"></div>');
                $($('.newMemo')[currentMemo-1]).siblings().attr("name","lockedMemo");
                }
                else{
                    console.log('already locked');
                }
            }
            else
                alert("Set a password first");
        })
    }
    else
        alert("Invalid title ");
})
//Activation of change password button
$('.changePassword').on('click',function(){
    if(password)
    {
        var enterUserPassword=prompt('Enter old password');
        if(enterUserPassword==password)
            password=prompt('Enter new password');
        else
            alert('Incorrect password');
    }
    else
        alert("Set password first");
})
//Activating theme changer button
$('.toggleButton').on('click',function(){
    $('.header').toggleClass("light");
    $('.header').toggleClass("darkHigh");
    if($('body').attr("style")==="background-color:#F8EFBA")
        $('body').attr("style","background-color:#CAD3C8");
    else
        $('body').attr("style","background-color:#F8EFBA");
    $('.instruction').toggleClass("instructionLight");
    $('.instruction').toggleClass("darkMid");
})
