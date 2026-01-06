@echo OFF
setlocal enabledelayedexpansion

rem ==========================================================
rem  Arc Connector Installation Script
rem ==========================================================

if "%~3"=="" (
    echo Missing arguments.
    echo Usage:   %~nx0 ^<ProviderName^> ^<ZipPath^> ^<AppRootDirectory^>
    echo Example: %~nx0 QuickBooks "full\path\to\setup.zip" "Arc\www"
    exit /b 1
)

set "PROVIDER_NAME=%~1"
set "ZIP_PATH=%~2"
set "APP_ROOT=%~3"
set "BIN_PATH=%APP_ROOT%\bin"
set "ASSEMBLY_PATH=%BIN_PATH%\System.Data.CData.%PROVIDER_NAME%.dll"
set "CONSOLE_EXE=%APP_ROOT%\..\CData.exe"


if not exist "%ZIP_PATH%" (
    echo Zip file not found: "%ZIP_PATH%"
    exit /b 1
)

if not exist "%CONSOLE_EXE%" (
    echo Installer engine not found: "%CONSOLE_EXE%"
    exit /b 1
)


if exist "%ASSEMBLY_PATH%" (
    del /f /q "%ASSEMBLY_PATH%"
)

if /i "%PROVIDER_NAME%"=="OracleOCI" call :CleanupOracleOCI
if /i "%PROVIDER_NAME%"=="ApacheKafka" call :CleanupApacheKafka


"%CONSOLE_EXE%" appRegister -Operation "install-provider" -Args "%ZIP_PATH%" -Args "%PROVIDER_NAME%" -Args "%APP_ROOT%" -@appdir "%APP_ROOT%" -@libdir "%BIN_PATH%"
goto :EOF


:CleanupOracleOCI
for %%F in (oci.dll ora*.dll System.Data.CData.OracleOCIw.dll) do (
    if exist "%BIN_PATH%\x64\%%F" del /f /q "%BIN_PATH%\x64\%%F"
    if exist "%BIN_PATH%\x86\%%F" del /f /q "%BIN_PATH%\x86\%%F"
)
goto :EOF


:CleanupApacheKafka
rd /s /q "%BIN_PATH%\librdkafka" 2>nul
set "KAFKA_DLLS=Confluent.Kafka.dll System.Buffers.dll System.Memory.dll System.Runtime.CompilerServices.Unsafe.dll"
for %%F in (%KAFKA_DLLS%) do (
    if exist "%BIN_PATH%\%%F" del /f /q "%BIN_PATH%\%%F"
)
goto :EOF