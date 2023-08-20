# Emacs shortcuts

## Help commands  
Emacs provides commands for reading documentation about Emacs commands.  These "help" commands all start with the character **C-h**, which is called "the Help character".  

To use the Help features, type the **C-h** character, and then a character saying what kind of help you want. If you are REALLY lost, type **C-h ?** and Emacs will tell you what kinds of help it can give. If you have typed **C-h** and decide you do not want any help, just type **C-g** to cancel it.  

If **C-h** does not display a message about help at the bottom of the
screen, try typing the **F1** key or **M-x help \<Return\>** instead.  

The most basic HELP feature is **C-h c**. Type **C-h**, the character **c**, and a command character or sequence; then Emacs displays a very brief description of the command.

 - Type **C-h c C-p**.

The message should be something like this:
```
C-p runs the command previous-line
```

Multi-character commands such as **C-x C-s** and (if you have no META or
EDIT or ALT key) **\<ESC\>v** are also allowed after **C-h c**.

To get more information about a command, use **C-h k** instead of **C-h c**.  

 - Type **C-h k C-p**.

This displays the documentation of the function, as well as its name, in an Emacs window. When you are finished reading the output, type **C-x 1** to get rid of the help text. You do not have to do this right away. You can do some editing while referring to the help text, and then type **C-x 1**.  

Here are some other useful **C-h** options:  

 - **C-h f** describe a function. You type in the name of the function.  
 - **C-h f previous-line** this displays all the information Emacs has about the function which implements the **C-p** command.  

A similar command **C-h v** displays the documentation of variables,
including those whose values you can set to customize Emacs behavior.
You need to type in the name of the variable when Emacs prompts for it.

 - **C-h a** Command Apropos. Type in a keyword and Emacs will list all the commands whose names contain that keyword. These commands can all be invoked with **M-x**. For some commands, Command Apropos will also list a one or two character sequence which runs the same command.  

 - **C-h a file \<Return\>**

This displays in another window a list of all **M-x** commands with "file"
in their names. You will see character-commands like **C-x C-f** listed
beside the corresponding command names such as **find-file**.  

 - **C-M-v** to scroll the help window. Do this a few times.  
 - **C-x 1** to delete the help window.  
 - **C-h i** Read included Manuals (a.k.a. Info). This command puts you into a special buffer called '\*info\*' where you can read manuals for the packages installed on your system. Type **m emacs \<Return\>** to read the Emacs manual. If you have never before used Info, type **?** and Emacs will take you on a guided tour of Info mode facilities. Once you are through with this tutorial, you should consult the Emacs Info manual as your primary documentation.  

 - **C-h r** to read the Emacs manual

## Editing & Navigating Text

 - **C-v**	Move forward one screenful
 - **M-v**	Move backward one screenful
 - **C-l**	Clear screen and redisplay all the text, moving the text around the cursor to the center of the screen

***

 - **C-n** Next line
 - **C-p** Previous line
 - **C-f** Forward (1 char)
 - **C-b** Bacward (1 char)
 - **M-f** Forward (1 word)
 - **M-b** Bacward (1 word)

***

 - **M-<** Move to the begining of text
 - **M->** Move to the end of text

***

The way you give a command a repeat count is by typing **C-u** and then the digits before you type the command. The **C-v** is an exception to this rule.  
\>\> Try typing **C-u 8 C-v** now.  
This should have scrolled the screen up by 8 lines.  
\>\> Type **C-u 0 C-l** to make the current line be the first one visible on the screen.  
\>\> Type **C-u 8 \*** to insert ********  
***

If Emacs stops responding to your commands, you can stop it safely by
typing **C-g**.  You can use **C-g** to stop a command which is taking too
long to execute. You can also use **C-g** to discard a numeric argument or the beginning of a command that you do not want to finish. If you have typed an **\<ESC\>** by mistake, you can get rid of it with a **C-g**.  

***

 - **C-x 1** One window (i.e., kill all other windows)   

\>\> Type **C-h k C-f**. See how this window shrinks, while a new one appears to display documentation on the **C-f** command.  
\>\> Type **C-x 1** and see the documentation listing window disappear.  

***

 - **\<Delback\>** Delete the character just before the cursor  
 - **C-d** Delete the next character after the cursor  
 - **M-\<Delback\>** Kill the word immediately before the cursor  
 - **M-d** Kill the next word after the cursor  
 - **C-k** Kill from the cursor position to end of line  
 - **M-k** Kill to the end of the current sentence  

You can also kill any part of the text with one uniform method. Move
to one end of that part, and type **C-@** or **C-\<SPC\>** (either one). Move to the other end of that part, and type **C-w**. That kills all the text between the two positions.  

The difference between "killing" and "deleting" is that "killed" text
can be reinserted (at any position), whereas "deleted" things cannot
be reinserted in this way (you can, however, undo a deletion -- see below).  

 - **C-u 2 C-k** kills two lines and their newlines; typing **C-k** twice would not do that.  

Bringing back killed text is called "yanking". (Think of it as
yanking back, or pulling back, some text that was taken away.)  You
can yank the killed text either at the same place where it was killed,
or at some other place in the text you are editing, or even in a
different file. You can yank the same text several times; that makes
multiple copies of it. Some other editors call killing and yanking
"cutting" and "pasting" (see the Glossary in the Emacs manual).  

 - The command for yanking is **C-y**. It reinserts the last killed text,
at the current cursor position.  

If you do several **C-k**'s in a row, all of the killed text is saved
together, so that one **C-y** will yank all of the lines at once.  

What do you do if you have some text you want to yank back, and then
you kill something else? **C-y** would yank the more recent kill. But
the previous text is not lost. You can get back to it using the **M-y**
command. After you have done **C-y** to get the most recent kill, typing
**M-y** replaces that yanked text with the previous kill. Typing **M-y**
again and again brings in earlier and earlier kills. When you have
reached the text you are looking for, you do not have to do anything to
keep it. Just go on with your editing, leaving the yanked text where
it is.  

If you **M-y** enough times, you come back to the starting point (the most
recent kill).  

 - **C-x u** to undo changes. Normally, **C-x** u undoes the changes made by one command; If you repeat the **C-x** u several times in a row, each repetition undoes one additional command. Self-inserting characters are usually handled in groups of up to 20.  

 - **C-\_** is an alternative undo command; it works just the same as **C-x u**, but it is easier to type several times in a row. On some terminals, you can type **C-\_** by typing **\/** while holding down **CONTROL**.  

## Search for strings

 - **C-s** for forward search  
 - **C-r** for reverse search

Emacs, in an incremental search, tries to go to the occurrence of the string that you've typed out so far. To go to the next occurrence of 'cursor' just type C-s again. To go to the previous one, type \<Delback\>.  

## Files
 - **C-x C-f** Find a file  

Emacs asks you to type the file name. The file name you type appears
on the bottom line of the screen. The bottom line is called the
minibuffer when it is used for this sort of input. You can use
ordinary Emacs editing commands to edit the file name.  

 - **C-x C-s** Save the file  

The first time you do this, Emacs renames the original file to a new name so that it is not lost. The new name is made by adding "~" to the end of the original file's name.  

You can find an existing file, to view it or edit it. You can also find a file which does not already exist. This is the way to create a file with Emacs: find the file, which will start out empty, and then begin inserting the text for the file.  When you ask to "save" the file, Emacs will really create the file with the text that you have inserted. From then on, you can consider yourself to be editing an already existing file.  

If you find a second file with **C-x C-f**, the first file remains inside Emacs. You can switch back to it by finding it again with **C-x C-f**.  This way you can get quite a number of files inside Emacs.  

 - **C-x C-b** List buffers  

See how each buffer has a name, and it may also have a file name for the file whose contents it holds. If you want to edit another buffer, use the **C-x b** command. In that command, you have to type the buffer's name.  

Some buffers do not correspond to files. For example, the buffer named "\*Buffer List\*" does not have any file. It is the buffer which contains the buffer list that you made with C-x C-b. The buffer named "\*Messages\*" also does not correspond to any file; it contains the messages that have appeared on the bottom line during your Emacs session.  

 - **C-x s** Save some buffers  

**C-x s** asks you about each buffer which contains changes that you have not saved. It asks you, for each such buffer, whether to save the buffer.  

## Extending the command set  
 - **C-x** Character eXtend. Followed by one character.  
 - **M-x** Named command eXtend. Followed by a long name.  
 - **C-x C-c** ends the command session (offers to save each changed file before it kills Emacs)
 - **C-z** exits Emacs *temporarily* so that you can go back to the same Emacs session afterward. In the most common shells, you can resume Emacs with the `fg` command or with `%emacs`.  

Named eXtended commands are commands which are used even less frequently, or commands which are used only in certain modes. An example is the command replace-string, which globally replaces one string with another.  When you type **M-x**, Emacs prompts you at the bottom of the screen with **M-x** and you should type the name of the command; in this case, "replace-string". Just type "repl s\<TAB\>" and Emacs will complete the name. End the command name with \<Return\>.  

Emacs periodically writes an "auto save" file for each file that you are editing. The auto save file name has a # at the beginning and the end; for example, if your file is named "hello.c", its auto save file's name is "#hello.c#".  When you save the file in the normal way, Emacs deletes its auto save file.  

If the computer crashes, you can recover your auto-saved editing by finding the file normally (the file you were editing, not the auto save file) and then typing **M-x** recover-file \<Return\>.  When it asks for confirmation, type yes\<Return\> to go ahead and recover the auto-save data.  

If Emacs sees that you are typing multicharacter commands slowly, it shows them to you at the bottom of the screen in an area called the "echo area". The echo area contains the bottom line of the screen.  

The line immediately above the echo area is called the "mode line". The mode line says something like this:  

```
--:**-  TUTORIAL       63% L749    (Fundamental)-----------------------  
```

This line gives useful information about the status of Emacs and the text you are editing.  

The stars near the front mean that you have made changes to the text. Right after you visit or save a file, that part of the mode line shows no stars, just dashes.  

The part of the mode line inside the parentheses is to tell you what editing modes you are in. The default mode is Fundamental which is what you are using now. It is an example of a "major mode".  

## Emacs modes

Emacs has many different major modes. Some of them are meant for editing different languages and/or kinds of text, such as Lisp mode, Text mode, etc. At any time one and only one major mode is active, and its name can always be found in the mode line just where "Fundamental" is now.  

Each major mode is the name of an extended command, which is how you can switch to that mode. For example, **M-x** fundamental-mode is a command to switch to Fundamental mode.  

If you are going to be editing human-language text, such as this file, you
should probably use Text Mode.  
 - **M-x text-mode \<Return\>**.  

Major modes usually make subtle changes like that one: most commands do "the same job" in each major mode, but they work a little bit differently.  

 - **C-h m** to view documentation on your current major mode  

Minor modes are not alternatives to the major modes, just minor modifications of them. Each minor mode can be turned on or off by itself, independent of all other minor modes, and independent of your major mode.  

To set the margin for auto-fill-mode (minor mode) max line length when break words:  
 - **C-u 20 C-x f**  

If you make changes in the middle of a paragraph, Auto Fill mode does not re-fill it for you. To re-fill the paragraph, type **M-q** (META-q) with the cursor inside that paragraph.  

## Multiple windows  
Emacs uses the term "frames" for what some other applications call "windows". So here "windows" will have a different meaning, something simliar to splitting an editor (for the same file) into 2 different areas.  

 - Type **C-x 2** splits the screen into two windows.  
 - Type **C-M-v** to scroll the bottom window. (If you do not have a real META key, type **\<ESC\> C-v**.)  
 - Type **C-x o** ("o" for "other") to move the cursor to the bottom window.  
 - **C-x o** again to move the cursor back to the top window. The cursor in the top window is just where it was before.  

All the ordinary editing commands apply to the window that the cursor is in. We call this the "selected window".  

If you do not have a real META key, and you use **\<ESC\>** instead, the
order does matter: you must type **\<ESC\>** followed by **C-v**, because
**C-\<ESC\> v** will not work. This is because **<ESC>** is a character
in its own right, not a modifier key.  

Here is another way to use two windows to display two different things:  

 - Type **C-x 4 C-f** followed by the name of one of your files. End with **\<Return\>**. See the specified file appear in the bottom window.  The cursor goes there, too.  

 - Type **C-x o** to go back to the top window, and **C-x 1** to delete the bottom window.  

## Multiple frames  
A frame is what we call one collection of windows, together with its menus, scroll bars, echo area, etc. (Some other applications call a frame a "window".)  
 - **M-x make-frame** to see a new frame appear on your screen  
 - **M-x delete-frame** to remove the selected frame  
No information is lost when you close a frame (or window), it is simply removed from sight and can be restored later.  

## Recursive editing levels  
Sometimes you will get into what is called a "recursive editing level".  This is indicated by square brackets in the mode line, surrounding the parentheses around the major mode name. For example, you might see \[\(Fundamental\)\] instead of (Fundamental).  

To get out of the recursive editing level, type \<ESC\> \<ESC\> \<ESC\>. That is an all-purpose "get out" command.  You can also use it for eliminating extra windows, and getting out of the minibuffer.  

Type **M-x** to get into a minibuffer; then type \<ESC\> \<ESC\> \<ESC\> to get out.  

You cannot use **C-g** to get out of a recursive editing level. This is
because **C-g** is used for canceling commands and arguments WITHIN the
recursive editing level.  

